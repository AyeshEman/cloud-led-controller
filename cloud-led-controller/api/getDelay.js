export default function handler(req, res) {
    global.cloudDelayValue = global.cloudDelayValue || 1000;
    res.status(200).json({ delay: global.cloudDelayValue });
}
