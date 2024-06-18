// routes/index.js
"use strict";

/*
 * Listing 26.2 (p. 381)
 * @TODO: index.js에 모든 라우트 임포팅
 */
const pagesController = require("../Controllers/controllers/pagesController"),
  subscribersController = require("../controllers/subscribersController"),
  usersController = require("../controllers/usersController.TODO"),
  coursesController = require("../controllers/coursesController"),
  talksController = require("..controllers/talksController"),
  trainsController = require("../controllers/trainsController"),
  errorController = require("../controllers/errorController");

// 네임스페이스가 적용된 관련 라우트 모듈로부터의 라우트 사용

// index.js로부터 라우트 익스포트
