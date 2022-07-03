export type Version = 'vs83' | 'vs92'

export interface Config {
    source: string
    version: Version
    port: number
}

export interface ActionBody {
    id: string
    mode: number
    type: number
    selection: number
}
