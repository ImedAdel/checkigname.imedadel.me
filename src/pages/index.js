import React from 'react'
import ky from 'ky-universal'
import { Helmet } from 'react-helmet'
import '../style/main.css'

const Page = () => {
	const [username, setUsername] = React.useState('')
	const [usernameInput, setUsernameInput] = React.useState('')
	const [available, setAvailable] = React.useState(null)
	const [checking, setCheking] = React.useState(false)

	React.useEffect(() => {
		if (!!username) {
			;(async () => {
				try {
					setCheking(true)
					const parsed = await ky(`https://instagram.com/${username}/`, {
						throwHttpErrors: false,
					})
					setCheking(false)

					if (parsed.status === 200) setAvailable(false)
					else if (parsed.status === 404) setAvailable(true)
				} catch (_) {}
			})()
		}
	}, [username])

	const message = (input, status, checkStatus) => {
		if (!input) return 'Enter a username to check 😉'
		if (checkStatus) return 'Checking... 🔍'
		if (status) return 'Available 🎉'
		else return 'Taken 😞'
	}

	return (
		<main>
			<Helmet defer={false}>
				<meta charSet='utf-8' />
				<title>{`Check Instragram Username [NEW VERSION]`}</title>
				<link rel='canonical' href={`https://checkigusername.imedadel.me`} />
				<html lang='en' />
				<meta
					name='viewport'
					content='width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover'
				/>
				<meta
					name='description'
					content={`A tool to check the availability of Instagram usernames. Tested with the latest Intagram version.`}
				/>
				<meta
					property='og:url'
					content={`https://checkigusername.imedadel.me`}
				/>
				<meta property='og:type' content={`website`} />
				<meta property='og:locale' content='en' />
				<meta property='og:site_name' content='Check Instagram Username' />
			</Helmet>

			<h1>Check Instagram Username</h1>
			<div className='input-box'>
				<input
					type='text'
					name='username'
					value={usernameInput}
					onChange={e => setUsernameInput(e.target.value)}
				/>
				<button onClick={() => setUsername(usernameInput)}>Check</button>
			</div>
			<p>{message(username, available, checking)}</p>
		</main>
	)
}

export default Page
