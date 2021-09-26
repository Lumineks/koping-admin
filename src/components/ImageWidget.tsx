import React, { useState } from 'react';
import { InputGroup, Button } from 'react-bootstrap';
import { FileInfo, Widget } from '@uploadcare/react-widget';
import Lightbox from 'react-image-lightbox';

interface ImageWidgetProps {
  label: string;
  imgPath?: string;
  onChange: (imgPath: string) => void;
  isLarge: boolean;
}

const ImageWidget = ({ label, imgPath = '', onChange, isLarge }: ImageWidgetProps) => {
  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);

  const onFileUpload = (fileinfo: FileInfo) => {
    if (!fileinfo.cdnUrl) {
      return;
    }

    onChange(fileinfo.cdnUrl);
  };

  return (
    <div>
      <InputGroup className="mb-3 m-0 row">
        <InputGroup.Text
          className={`col-xs-12 col-sm-6 mb-2 ${isLarge ? 'col-lg-4' : 'col-lg-7'}`}
          id="inputGroup-sizing-default"
        >
          {label}
        </InputGroup.Text>
        <div className={`col-xs-12 col-sm-6 ${isLarge ? 'col-lg-8' : 'col-lg-5'}`}>
          <Widget
            publicKey="ca490e314dcdb7dd8eae"
            onChange={onFileUpload}
            tabs="file"
            crop="2:1"
            locale="ru"
            clearable
          />
        </div>
      </InputGroup>
      {imgPath && (
        <div className="mb-4">
          <img
            className="my-2"
            style={{ objectFit: 'contain' }}
            src={imgPath}
            alt="Изображение товара"
            width={150}
            height={100}
          />
          <Button
            className="ms-2"
            variant="light"
            onClick={() => {
              setIsLightBoxOpen(true);
            }}
          >
            Открыть полный размер
          </Button>
          {isLightBoxOpen && (
            <Lightbox
              mainSrc={imgPath}
              onCloseRequest={() => {
                setIsLightBoxOpen(false);
              }}
            />
          )}
        </div>
      )}
    </div>
  );
};

ImageWidget.defaultProps = {
  imgPath: '',
};

export default ImageWidget;
