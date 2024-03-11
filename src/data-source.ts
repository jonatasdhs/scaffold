/* import 'dotenv/config'
import path from 'path'
import {DataSource, DataSourceOptions} from 'typeorm';
import {AppError} from './errors'

const dataSourceConfig = (): DataSourceOptions => {
    const entitiesPath: string = path.join(__dirname, './entities/**.{ts,js}')
    const migrationsPath: string = path.join(__dirname, './migrations/**.{ts,js}')

    const dbUrl: string | undefined = process.env.DATABASE_URL

    if(!dbUrl) throw new AppError("Missing env var: 'DATABASE_URL' ")

    const nodeEnv: string | undefined = process.env.NODE_ENV

    return {
        type:'postgres', //Alterar com base no Banco
        url: dbUrl,
        synchronize: false,
        logging: true,
        entities: [entitiesPath],
        migrations: [migrationsPath]
    }
}

export const AppDataSource = new DataSource(dataSourceConfig()) */