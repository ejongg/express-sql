import { Router } from 'express'
import { sequelize } from '../db'
import { NotFoundError } from '../errors'
import { Song } from '../models/Song'
import { wrap } from '../wrap'

const router = Router()

router.get(
    '/songs',
    wrap(async (_, res) => {
        res.json(await Song.findAll())
    })
)

router.post(
    '/songs',
    wrap(async (req, res) => {
        const { title, artist, content } = req.body
        const song = await Song.create({
            title,
            artist,
            content,
        })
        res.status(201).json(song)
    })
)

router.put(
    '/songs/:songId',
    wrap(async (req, res) => {
        const song = await Song.findByPk(req.params.songId)
        if (!song) {
            throw new NotFoundError('Song not found')
        }
        const { title, artist, content } = req.body
        const transaction = await sequelize.transaction()
        try {
            await song.update(
                {
                    title,
                    artist,
                    content,
                },
                { transaction }
            )
            await transaction.commit()
        } catch (err) {
            await transaction.rollback()
            throw err
        }
        res.json(song)
    })
)

router.delete(
    '/songs/:songId',
    wrap(async (req, res) => {
        const song = await Song.findByPk(req.params.songId)
        if (!song) {
            throw new NotFoundError('Song not found')
        }
        await song.destroy()
        res.status(204).end()
    })
)

export default router
