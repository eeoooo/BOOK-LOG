import React from 'react';
import styles from './image_file_input.module.css';
const ImageFileInput = ({imageUploader, name, onFileChange}) => (
            <button className={styles.imageButton}>Image</button>
    );

export default ImageFileInput;