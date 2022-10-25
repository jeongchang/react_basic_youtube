import { useEffect, useState } from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';

function App() {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		//javscdript fetch(youtube api)
		const requestOptions = {
			method: 'GET',
			redirect: 'follow',
		};

		fetch(
			'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAhoCez0b2I99DwAfxGzvfdO1gsMTGhY7w',
			requestOptions
		)
			.then((response) => response.json())
			.then((result) => {
				setVideos(result.items);
			})
			.catch((error) => console.log('error', error));
	}, []); //두번째 변수가 없으면 매번, []빈 배열이 있으면 한 번만, 배열의 값(변수명)이 있으면 변수값이 변경될 때마다 callback

	return <VideoList videos={videos} />;
}

export default App;
