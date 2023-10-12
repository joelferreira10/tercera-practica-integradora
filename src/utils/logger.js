import winston from 'winston'

const customlvelsOptions={
    levels:{
        fatal:0,
        error:1,
        warning:2,
        info:3,
        http:4,
        debug:5
    },
    colors:{
        fatal:"black",
        error:"red",
        warning:'yellow',
        info:'blue',
        http:'green',
        debug:'white'
    }
}
winston.addColors(customlvelsOptions.colors)
export const logger=winston.createLogger({
    levels:customlvelsOptions.levels,
    transports:[
        new winston.transports.Console({
            level:"info",
            format:winston.format.combine(
                winston.format.timestamp({
                    format: 'MM-DD-YYYY HH:mm:ss',
                }),
                winston.format.colorize({colors:customlvelsOptions.colors}),
                winston.format.simple(),
                winston.format.printf((info) => `${info.level} | ${info.timestamp} | ${info.message}`)
            )
        }),
        new winston.transports.File({filename:'./errors.log', level:"error"}),
    ]

})