import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://lgbumenlhhshwmhrakwt.supabase.co'
const SUPABASE_KEY =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMDUzMzY2NiwiZXhwIjoxOTM2MTA5NjY2fQ.GX9NOEI_Q5s9GHkMCv8eUaKCpU3onZip7E_Ukn_aoq8'
const supabase = createClient(supabaseUrl, SUPABASE_KEY)

// Set default state
let state = {
	fullname: '',
	email: '',
	prize: undefined
}

export async function getPrize (): Promise<any> {
	// get available prizes
	const { data: prizes, error } = await supabase
		.from('prizes')
		.select("*")
		.gt('amount', 0)

	// Create a list that will make it easy to get random item by the weight
	const weighted_prizes = []
	for (const prize of prizes) {
		const weight = prize.weight * 10
		for (let i = 0; i < weight; i++) {
			weighted_prizes.push(prize)
		}
	}

	// Get a prize
	const chosenPrize = weighted_prizes[Math.floor(Math.random() * weighted_prizes.length)]

	// Add prize to the state
	state = { ...state, prize: chosenPrize }

	return chosenPrize
}

export async function setUser ({ fullname, email }): Promise<{
	isUnique: boolean
	state: {
		fullname: string
		email: string
		prize: any
	}
}> {
	// Get already winners
	const { data: winners, error } = await supabase
		.from('winners')
		.select('email')

	// Check if current user has already won
	let isUnique = true
	for (const winner of winners) {
		console.log(winner)
		if (winner.email.toLowerCase() == email.toLowerCase()) {
			isUnique = false
		}
	}

	// If current user hasn't won, set the state
	if (isUnique) {
		state = { ...state, fullname, email }
	}

	// Return data
	return { isUnique, state }
}

export async function createWinner (): Promise<void> {
	// Store the winner
	const { data, error } = await supabase.from('winners').insert([{
		fullname: state.fullname,
		email: state.email,
		prize: state.prize.id
	}])

	// Decrease the amount of prizes
	await supabase
		.from('prizes')
		.update({ amount: state.prize.amount - 1 })
		.eq('id', state.prize.id)
}
