const getHome = async (req, res) => {
    try {
        res.status(200).json({"test": "success"})
    }
    catch (err) {
        res.json(err)
    }
}

module.exports = { getHome }
