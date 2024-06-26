/**
 * Дефолтное время кручения 22 сек.
 *
 * Длина кручения 22 сек:
 * 'video.webm'
 *
 * Длина кручения 22 сек, видео начнётся с 4 секунды:
 * ['video.webm', 4]
 *
 * Длина кручения 30 сек, видео начнётся с 4 секунды:
 * ['video.webm', 4, 30]
 *
 * Выберется случайное видео из списка, рандомится только при перезапуске всего списка видосов:
 * () => p5Wheel.random([
 *    ['video.webm', 4, 30],
 *    ['video.webm', 45],
 * ]),
 */
const videosFree = [
    () => p5Wheel.random([
        ['videos/01.mov', 0],
        ['videos/02.mp4', 0],
        ['videos/03.mp4', 0],
        ['videos/04.mp4', 0],
        ['videos/05.mp4', 0],
        ['videos/06.mp4', 0],
        ['videos/07.mp4', 0],
        ['videos/08.mp4', 6],
        ['videos/09.mp4', 0],
        ['videos/10.mov', 0],
        ['videos/11.mp4', 0],
        ['videos/12.mp4', 12],
        ['videos/13.mp4', 11],
        ['videos/14.mp4', 4],
        ['videos/15.mp4', 17],
        ['videos/16.mp4', 0],
        ['videos/17.mp4', 0],
        ['videos/18.mp4', 10],
        ['videos/19.mp4', 0],
        ['videos/20.mp4', 0],
        ['videos/21.mp4', 0],
        ['videos/22.mp4', 0],
        ['videos/23.mp4', 0],
        ['videos/24.mp4', 10],
        ['videos/25.mp4', 0],
        ['videos/26.mp4', 0],
        ['videos/27.mp4', 0],
        ['videos/28.mp4', 0],
        ['videos/29.mp4', 0],
        ['videos/30.mp4', 0],
        ['videos/31.mp4', 0],
    ])  
];
