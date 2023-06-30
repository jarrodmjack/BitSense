const getHome = async (req, res) => {
    console.log('HIT HOME CONTROLLER/ROUTE')
	try {
		res.status(200).json({ message: "this is the home data at route /" })
	} catch (err) {
		res.json(err)
	}
}

module.exports = { getHome }
