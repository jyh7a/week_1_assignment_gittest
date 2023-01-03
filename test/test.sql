SELECT *
FROM Users u
  LEFT JOIN Posts p ON u.id = p.userId
  LEFT JOIN Likes l ON p.id = l.postId;
-- 
SELECT `User`.*,
  `Posts`.`id` AS `Posts.id`,
  `Posts`.`userId` AS `Posts.userId`,
  `Posts`.`title` AS `Posts.title`,
  `Posts`.`content` AS `Posts.content`,
  `Posts`.`createdAt` AS `Posts.createdAt`,
  `Posts`.`updatedAt` AS `Posts.updatedAt`,
  `Posts`.`UserId` AS `Posts.UserId`
FROM (
    SELECT `User`.`id`,
      `User`.`nickname`,
      `User`.`password`,
      `User`.`createdAt`,
      `User`.`updatedAt`
    FROM `Users` AS `User`
    LIMIT 1
  ) AS `User`
  LEFT OUTER JOIN `Posts` AS `Posts` ON `User`.`id` = `Posts`.`UserId`;
--
SELECT `User`.`id`,
`User`.`nickname`,
`User`.`password`,
`User`.`createdAt`,
`User`.`updatedAt`,
`Posts`.`id` AS `Posts.id`,
`Posts`.`userId` AS `Posts.userId`,
`Posts`.`title` AS `Posts.title`,
`Posts`.`content` AS `Posts.content`,
`Posts`.`createdAt` AS `Posts.createdAt`,
`Posts`.`updatedAt` AS `Posts.updatedAt`,
`Posts`.`UserId` AS `Posts.UserId`,
`Posts->Likes`.`id` AS `Posts.Likes.id`,
`Posts->Likes`.`userId` AS `Posts.Likes.userId`,
`Posts->Likes`.`postId` AS `Posts.Likes.postId`,
`Posts->Likes`.`commentId` AS `Posts.Likes.commentId`,
`Posts->Likes`.`createdAt` AS `Posts.Likes.createdAt`,
`Posts->Likes`.`updatedAt` AS `Posts.Likes.updatedAt`,
`Posts->Likes`.`PostId` AS `Posts.Likes.PostId`,
`Posts->Likes`.`UserId` AS `Posts.Likes.UserId`
FROM `Users` AS `User`
  LEFT OUTER JOIN `Posts` AS `Posts` ON `User`.`id` = `Posts`.`UserId`
  LEFT OUTER JOIN `Likes` AS `Posts->Likes` ON `Posts`.`id` = `Posts->Likes`.`PostId`;