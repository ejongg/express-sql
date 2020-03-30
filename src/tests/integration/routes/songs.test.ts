import { fetch, assertDeepEqual } from '../helper'
import * as assert from 'assert'
import { Song } from '../../../models/Song'
import * as uuid from 'uuid'

describe('Songs', () => {
    describe('GET /songs', () => {
        it('it should return all songs', async () => {
            await Song.create({
                title: 'Song 1',
                artist: 'Artist 1',
                content: 'A B C D',
            })
            const res = await fetch('/songs', { method: 'GET' })
            assert.strictEqual(res.status, 200)
            const body = await res.json()
            assertDeepEqual(body, [
                {
                    artist: 'Artist 1',
                    content: 'A B C D',
                    id: body[0].id,
                    title: 'Song 1',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ])
        })
    })
    describe('POST /songs', () => {
        it('should create a song', async () => {
            const res = await fetch('/songs', {
                method: 'POST',
                body: JSON.stringify({
                    title: 'Song 1',
                    artist: 'Artist',
                    content: 'A B C D',
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            assert.strictEqual(res.status, 201)
            const body = await res.json()
            assertDeepEqual(body, {
                id: body.id,
                title: 'Song 1',
                artist: 'Artist',
                content: 'A B C D',
                createdAt: new Date(),
                updatedAt: new Date(),
            })
        })
    })
    describe('PUT /songs/:songId', () => {
        it('should update a song', async () => {
            const song = await Song.create({
                title: 'Song 1',
                artist: 'Artist 1',
                content: 'A B C D',
            })
            const res = await fetch(`/songs/${song.id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    title: 'Song 2',
                    artist: 'Artist 2',
                    content: 'E F G',
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            assert.strictEqual(res.status, 200)
            const body = await res.json()
            assertDeepEqual(body, {
                id: body.id,
                title: 'Song 2',
                artist: 'Artist 2',
                content: 'E F G',
                createdAt: new Date(),
                updatedAt: new Date(),
            })
        })
        it('should return 404 if song is not found', async () => {
            const res = await fetch(`/songs/${uuid.v4()}`, {
                method: 'PUT',
                body: JSON.stringify({
                    title: 'Song 2',
                    artist: 'Artist 2',
                    content: 'E F G',
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            assert.strictEqual(res.status, 404)
            assert.strictEqual((await res.json()).message, 'Song not found')
        })
    })
    describe('DELETE /songs/:songId', () => {
        it('should delete a song', async () => {
            const song = await Song.create({
                title: 'Song 1',
                artist: 'Artist 1',
                content: 'A B C D',
            })
            const res = await fetch(`/songs/${song.id}`, {
                method: 'DELETE',
            })
            assert.strictEqual(res.status, 204)
        })
        it('should return 404 if song is not found', async () => {
            const res = await fetch(`/songs/${uuid.v4()}`, {
                method: 'DELETE',
            })
            assert.strictEqual(res.status, 404)
            assert.strictEqual((await res.json()).message, 'Song not found')
        })
    })
})
