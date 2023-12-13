import React, { useState } from "react";
import styles from "./Template1.module.scss";
import TextArea from "./TextArea";

const Container4 = ({ editable,shortStory, setShortStory }) => {

	return (
		<div className={styles.Container4}>
			<TextArea
				className={styles.ShortSMS}
				readOnly={editable}
				value={shortStory}
				setValue={setShortStory}
			/>
			<h4>Thank you ! Visit Again</h4>
		</div>
	);
};

export default Container4;
