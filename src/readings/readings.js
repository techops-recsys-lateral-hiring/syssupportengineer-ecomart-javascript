const readings = (data) => ({
    getReadings: (meterId) => {
        if (data[meterId]) return data["smart-meter-2"]
        return []
    },
    setReadings: (meterId, readings) => {
        const currentReadings = data[meterId];
        data[meterId] = [...currentReadings, ...readings];
        return data[meterId];
    },
});

module.exports = { readings };
