import React from "react";
import { Avatar } from "rsuite";
import { gerUser } from "../../utils/BookingHelper";
import { Tooltip, Whisper } from "rsuite";
import { Uploader, Message, Loader, useToaster } from "rsuite";
import AvatarIcon from "@rsuite/icons/legacy/Avatar";
import axios from "axios";

const Profile = () => {
	const user = gerUser();
	const tooltip = <Tooltip>{user?.UserName}</Tooltip>;
	const toaster = useToaster();
	const [uploading, setUploading] = React.useState(false);
	const [fileInfo, setFileInfo] = React.useState(null);
	function previewFile(file, callback) {
		
			const formData = new FormData();
			formData.append("file", file);
			const config = {
				headers: {
					"content-type": "multipart/form-data",
				},
			};
			console.log(formData.get('file'));
			axios.defaults.withCredentials = true;
			axios.post("http://localhost:5000/user/uplodprofileimg", formData, config).then(r=> console.log(r))

			const reader = new FileReader();
			reader.onloadend = () => {
				callback(reader.result);
			};
			reader.readAsDataURL(file);
		
		
	
	}

	return (
		<>
			{user && (
				// <Whisper placement="top" controlId="control-id-hover" trigger="hover" speaker={tooltip}>

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
					<button style={{ width: 47, height: 59 }}>
				{uploading && <Loader backdrop center name={'file'} />}
						{fileInfo ? <img src={fileInfo} width="100%" height="100%" /> : <AvatarIcon style={{ fontSize: 38 }} />}
					</button>
				</Uploader>
			)}
		</>
	);
};

export default Profile;
// function handleSubmit(event, id) {
// 	if (file.length > 0) {
// 		const url = "http://localhost:5000/admin/imageupload";

	

// 		axios.post(url, formData, config).then((response) => {
// 			if (response.status === 200) {
// 				console.log("databace responce", response);
// 				toast.success(response.data.message);
// 				fechData();
// 				setFile([]);
// 				setloding(false);
// 			}
// 		});
// 	} else {
// 		toast.error("please select your Profile image ");
// 	}
// }
