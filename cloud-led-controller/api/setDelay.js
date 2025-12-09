export default function handler(req, res) {
    const newValue = parseInt(req.query.value);
    global.cloudDelayValue = newValue;
    res.status(200).json({ status: "OK", delay: newValue });
}
