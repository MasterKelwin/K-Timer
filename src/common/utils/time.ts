export function timeInSeconds(time: string) {
    const [hours = '00', minutes = '00', seconds = '00'] = time.split(':');

    const hoursInSeconds = Number(hours) * 3600;
    const minutesInSeconds = Number(minutes) * 60;
    
    return hoursInSeconds + minutesInSeconds + Number(seconds);
}



