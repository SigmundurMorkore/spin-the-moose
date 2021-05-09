import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://lgbumenlhhshwmhrakwt.supabase.co'
const SUPABASE_KEY =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMDUzMzY2NiwiZXhwIjoxOTM2MTA5NjY2fQ.GX9NOEI_Q5s9GHkMCv8eUaKCpU3onZip7E_Ukn_aoq8'
const supabase = createClient(supabaseUrl, SUPABASE_KEY)

let state = {
	fullname: '',
	email: ''
}

export async function setUser ({ fullname, email }): Promise<{
	isUnique: boolean
	state: {
		fullname: string
		email: string
	}
}> {
	const { data: winners, error } = await supabase
		.from('winners')
		.select('email')

	let isUnique = true
	for (const winner of winners) {
		console.log(winner)
		if (winner.email.toLowerCase() == email.toLowerCase()) {
			isUnique = false
		}
	}

	if (isUnique) {
		state = { ...state, fullname, email }
	}

	return { isUnique, state }
}

export async function createWinner (): Promise<void> {
	const { data, error } = await supabase.from('winners').insert([state])
}
