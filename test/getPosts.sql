SELECT
    *
FROM
    Users u
LEFT JOIN Posts p ON
    u.id = p.userId
LEFT JOIN Likes l ON
    p.id = l.postId;


-- show Posts table
SELECT *
FROM Posts p 

-- show Likes table
SELECT * 
FROM Likes l 

-- show Posts left join Likes Table
SELECT *
FROM Posts p 
LEFT JOIN Likes l ON p.id = l.postId 
    
-- show Posts inner join Likes Table
SELECT *
FROM Posts p 
INNER JOIN Likes l ON p.id = l.postId 
    
-- Likes count in Posts
SELECT * 
FROM Posts p 
INNER JOIN Likes l ON p.id = l.postId 
    
-- Likes count in Posts
SELECT *, COUNT(p.id) as cnt
FROM Posts p 
INNER JOIN Likes l ON p.id = l.postId 
GROUP BY p.id
    
-- Likes count in Posts
SELECT p.id, COUNT(p.id) as cnt
FROM Posts p 
INNER JOIN Likes l ON p.id = l.postId 
GROUP BY p.id

-- Likes count in Posts
SELECT *
FROM Posts p
LEFT JOIN (
        SELECT p.id, COUNT(p.id) as cnt
        FROM Posts p 
        INNER JOIN Likes l ON p.id = l.postId 
        GROUP BY p.id
    ) AS lc 
    ON p.id = lc.id

-- Likes count in Posts
SELECT p.*, COALESCE(lc.cnt, lc.cnt, 0) AS `likes`
FROM Posts p
LEFT JOIN (
        SELECT p.id, COUNT(p.id) as cnt
        FROM Posts p 
        INNER JOIN Likes l ON p.id = l.postId 
        GROUP BY p.id
    ) AS lc 
    ON p.id = lc.id    

-- Likes count in Posts
SELECT p.*, u.nickname, COALESCE(lc.cnt, lc.cnt, 0) AS `likes`
FROM Posts p
LEFT JOIN (
        SELECT p.id, COUNT(p.id) as cnt
        FROM Posts p 
        INNER JOIN Likes l ON p.id = l.postId 
        GROUP BY p.id
    ) AS lc 
    ON p.id = lc.id
LEFT JOIN Users u
ON p.userId = u.id;

-- test code
SELECT *, COUNT(p.id) AS cnt 
FROM Posts p 
    LEFT JOIN Likes l ON p.id = l.postId   
    GROUP BY p.id

-- test code
SELECT *
FROM (
    SELECT p.id, COUNT(p.id) AS cnt 
    FROM Posts p 
        LEFT JOIN Likes l ON p.id = l.postId   
        GROUP BY p.id
    )AS t
WHERE if( cnt = 1, 1, cnt )