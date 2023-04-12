import AsyncStorage from "@react-native-async-storage/async-storage"
import { PlayerInfo, TennisMatchModel } from "../model/Models"

export class StorageApi {

    async getMatches(): Promise<TennisMatchModel[]> {
        return AsyncStorage.getItem('matches')
            .then((rawData: string | any) => {
                if (rawData == null) {
                    return []
                }
                return JSON.parse(rawData)
            })
            .catch(e => { console.error(e) })
    }

    reset(key: string, value: any) {
        AsyncStorage.setItem(key, JSON.stringify(value))
    }

    async addMatch(match: TennisMatchModel): Promise<any> {
        return this.getMatches()
            .then(arr => {
                arr.push(match)
                return arr
            })
            .then(arr => this.reset('matches', arr))
            .catch(e => { console.error(e) })
    }

    async clearAll() {
        await AsyncStorage.clear()
    }

    async getPlayersDetails(): Promise<PlayerInfo[]> {
        const arr = new Array<string>;
        (await this.getMatches()).map((m: TennisMatchModel) => { arr.push(m.leftPlayer); arr.push(m.rightPlayer) })
        return [...new Set(arr)].map(uname => this.getDetailsByPlayername(uname))
    }

    getDetailsByPlayername(name: string): PlayerInfo {
        return new PlayerInfo('Test', 11, 1, 1, 11)
    }
}
