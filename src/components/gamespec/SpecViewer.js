import React from 'react';
import ContentEditable from 'react-contenteditable';
import TextField from 'material-ui/TextField';
import constants from '../../constants';
import styles from '../../styles';

const flexStyle = {
  width: '50%',
  ...styles.center
};

const SpecViewer = props => {
  let pieces = [];

  props.items.forEach((item, index) => {
    let piece = {
      deckPieceIndex: item.deckIndex,
      initialState: {
        currentImageIndex: item.currentImage,
        x: Math.round(item.offset.x / props.boardSize * 10000) / 100,
        y: Math.round(item.offset.y / props.boardSize * 10000) / 100,
        zDepth: index + 1
      },
      pieceElementId: item.eleKey
    };
    pieces.push(piece);
  });

  props.setInitialSpec(pieces);

  return (
    <div style={flexStyle}>
      <TextField
        floatingLabelText={constants.SPEC_NAME_FLOATING_LABEL}
        floatingLabelFixed={true}
        hintText={constants.SPEC_NAME_HINT_TEXT}
        errorText={props.specNameErrorText}
        value={props.specName}
        onChange={props.setSpecName}
      />
    </div>
  );
};

export default SpecViewer;
