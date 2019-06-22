
export const groupAccidentsByLocation = dataArray => {
    if (dataArray.length) {
        let current = dataArray[0];
        const groupResultArray = [{
            location: current.location,
            accidentIds: [current._id]
        }];
        let groupInd = 0;
        
        for (let i = 1; i < dataArray.length; i++) {
            const current = dataArray[i];
            const {coordinates} = current.location;
            const groupResultElementCoords = groupResultArray[groupInd].location.coordinates;

            if (coordinates[0] === groupResultElementCoords[0] &&
                coordinates[1] === groupResultElementCoords[1]) {
                groupResultArray[groupInd].accidentIds.push(current._id);
            } else {
                groupResultArray.push({
                    location: current.location,
                    accidentIds: [current._id]
                });
                groupInd++;
            }
        }

        return groupResultArray;
    } else {
        return [];
    }
};