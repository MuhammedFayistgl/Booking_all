import React from "react";
import { Uploader, Message, Loader, useToaster } from "rsuite";
import AvatarIcon from "@rsuite/icons/legacy/Avatar";
import { useDispatch } from "react-redux";
import { loginVerification, setProfileimageFileAsync } from "../../Reducs/extraSlice";

const ProfileUplodCopm = () => {
    const Dispatch = useDispatch()

	function previewFile(file, callback) {
        Dispatch(setProfileimageFileAsync(file))
        Dispatch(loginVerification())
	
		const reader = new FileReader();
		reader.onloadend = () => {
			callback(reader.result);
		};
		reader.readAsDataURL(file);
	}
	const toaster = useToaster();
	const [uploading, setUploading] = React.useState(false);
	const [fileInfo, setFileInfo] = React.useState(null);
	return (
		<>
			<Uploader
				fileListVisible={false}
				listType="picture"
				// action="//jsonplaceholder.typicode.com/posts/"
				onUpload={(file) => {
                  

					setUploading(true);
					previewFile(file.blobFile, (value) => {
						setFileInfo(value);
					});
				}}
				onSuccess={(response, file) => {
					setUploading(false);
					toaster.push(<Message type="success">Uploaded successfully</Message>);
					console.log(response);
				}}
				onError={() => {
					setFileInfo(null);
					setUploading(false);
					toaster.push(<Message type="error">Upload failed</Message>);
				}}
			>
				<button style={{ width: 53, height: 60 }}>
					{uploading && <Loader backdrop center />}
					{fileInfo ? <img src={fileInfo} width="100%" height="100%" /> : <AvatarIcon style={{ fontSize: 70 }} />}
				</button>
			</Uploader>
		</>
	);
};

export default ProfileUplodCopm;
