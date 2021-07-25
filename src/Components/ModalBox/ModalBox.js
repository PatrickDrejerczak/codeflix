import React from "react";
import { Modal } from "react-bootstrap";

import YoutubeEmbed from "../YoutubeEmbed/YoutubeEmbed";

const ModalBox = (props) => {
    console.log({ props })
    return (
        <div>
            <Modal
                size="xl"
                show={props.modalOpen}
                onHide={props.setModalOpen}
                aria-labelledby="example-modal-sizes-title-xl"
            >
                <Modal.Body>
                    <YoutubeEmbed width={"853"} height={"480"} embedId={props.movieTrailer.key} />

                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ModalBox;