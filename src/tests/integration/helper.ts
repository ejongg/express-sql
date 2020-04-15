import * as assert from 'assert'
import { isEqualWith } from 'lodash'
import { default as nodeFetch, RequestInit } from 'node-fetch'

export async function fetch(url: string, options: RequestInit): Promise<any> {
    return nodeFetch(`http://localhost:3001${url}`, options)
}

export function assertDeepEqual(actual: object, expected: object, message?: string): void {
    const customizer = (actual: any, expected: any, key: string | number | undefined): boolean | void => {
        if (key && /(?:[dD]ate|At)$/.test(key + '') && actual && expected) {
            return Math.abs(new Date(actual).getTime() - new Date(expected).getTime()) < 3000
        }
    }
    if (!isEqualWith(actual, expected, customizer as any)) {
        assert.strictEqual(actual, expected, message)
    }
}
