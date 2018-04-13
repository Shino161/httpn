import * as Sequelize from 'sequelize'
import { Options } from 'sequelize'
import models from './models/index'

import { optioins } from '../configuration/index'

// 定义模型
export const sequelize = new Sequelize(optioins['testDatabase'])
models.forEach(model => model.define(sequelize, Sequelize))
models.forEach(model => model.associate(sequelize.models))
