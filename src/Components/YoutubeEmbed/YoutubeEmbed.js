import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId, width, height }) => {
    console.log({embedId})
    return (
    <div style={{
        display: "flex",
        justifyContent: "center"
    }} className="video-responsive">
        <iframe
            width={`${width}`}
            height={`${height}`}
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
    </div>
    )
};

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
