import { Component } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import searchImages from "../../imageFinderApi";
import Loader from "../loader";
import ImageGallery from "../imageGallery";
import Button from "../button";
import Modal from "../modal";
import { Message, Wrapper } from "./searchResult.styles";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

export default class SearchResult extends Component {
  state = {
    images: [],
    error: null,
    status: Status.IDLE,
    page: 1,
    showModal: false,
    modalImg: "",
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.searchQuery;
    const nextName = this.props.searchQuery;
    const prevPage = prevState.page;
    const nextPage = this.state.page;
    prevName !== nextName &&
      this.setState({ status: Status.PENDING, images: [] });
    if (prevName !== nextName || prevPage !== nextPage) {
      searchImages(nextName, nextPage)
        .then((loadedImages) => {
          if (loadedImages.hits.length === 0) {
            this.setState({
              status: Status.REJECTED,
            });
            toast.error("Wrong search query!!!");
            return;
          }
          this.setState((state) => ({
            images: [...state.images, ...loadedImages.hits],
            status: Status.RESOLVED,
          }));
        })
        .catch((error) => this.setState({ error, status: Status.REJECTED }));
    }
  }

  toggleModal = () => {
    this.setState((state) => ({ showModal: !state.showModal }));
  };
  showModalImg = (largeImg) => {
    this.toggleModal();
    largeImg && this.setState({ modalImage: largeImg });
  };
  loadNextPage = () => {
    this.setState((state) => ({ page: state.page + 1 }));
  };
  render() {
    const { images, status, modalImage } = this.state;
    const { searchQuery } = this.props;

    if (status === "idle") {
      return <Message>Please enter your search query</Message>;
    }

    if (status === "pending") {
      return <Loader />;
    }

    if (status === "rejected") {
      return <Message>No images match {searchQuery} query</Message>;
    }

    if (status === "resolved") {
      return (
        <>
          <ImageGallery
            items={images}
            onShowModalImg={this.showModalImg}
            showModal={this.toggleModal}
          />{" "}
          <Wrapper>
            {" "}
            <Button onButtonClick={this.loadNextPage} />
          </Wrapper>
          {this.state.showModal && (
            <Modal onClose={this.toggleModal}>
              <img src={modalImage.src} alt={modalImage.alt} />
            </Modal>
          )}
        </>
      );
    }
  }
}
SearchResult.propTypes = {
  searchQuery: PropTypes.string,
};
