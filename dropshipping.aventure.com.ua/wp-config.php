<?php

// BEGIN iThemes Security - Не меняйте и не удаляйте эту строку
// iThemes Security Config Details: 2
define( 'DISALLOW_FILE_EDIT', true ); // Отключить редактор файлов - Безопасность > Настройки > Подстройки WordPress > Редактор файлов
// END iThemes Security - Не меняйте и не удаляйте эту строку

/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define('DB_NAME', 'aven');

/** Имя пользователя MySQL */
define('DB_USER', 'root');

/** Пароль к базе данных MySQL */
define('DB_PASSWORD', '');

/** Имя сервера MySQL */
define('DB_HOST', 'localhost');

/** Кодировка базы данных для создания таблиц. */
define('DB_CHARSET', 'utf8');

/** Схема сопоставления. Не меняйте, если не уверены. */
define('DB_COLLATE', '');

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'eiH(c;!|F3{m8),37jJ|:g2|*)`Ow2pgM+r$?cJUEYW[@ysu:1),<Gn;fB+ZM8w2');
define('SECURE_AUTH_KEY',  'PbLyXRfZ)_(H#.(R64>yt^LyW[WP6~Xj4:}n%la7qE[&rZe#z+l j(hM+6*Lw3AB');
define('LOGGED_IN_KEY',    'ew4m{74pz[h(YC&4dj2NKyg* N,&oVX<168+z4Kk5eMd2Jn:.7J<:,gz%FLR%xep');
define('NONCE_KEY',        'yhnmf$r+6[-Osk1+@qf~<szGK*4of<4D6U+qa8aE+])+Hz4Iq96M4{-+e]E*biKK');
define('AUTH_SALT',        '7ZJUJeJ30]:C_85Vs+(u+j>#ul)WiK/~:P+L773-Hf/))y@IQ,[|^&y] .f+,!07');
define('SECURE_AUTH_SALT', '|kz6!+/>>6eVjcO>eRo)5lNM4k!i(=C4xc(_5wzM?5DtD~}@&h$1fSfGB[+&r-{^');
define('LOGGED_IN_SALT',   'lJ2&sICyg;fi:px8Q>D;Az809Sy5Y%<GFO|VOXMW[q?sT4^^O.{wzwuwbqw%-SkX');
define('NONCE_SALT',       '()?YK-t}lPnnE(5I%Ol94L.[9p/i:!b>YKMSHbTisnp<.[OZ)+3q%y`:>NQ%o}|G');

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix  = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 * 
 * Информацию о других отладочных константах можно найти в Кодексе.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Инициализирует переменные WordPress и подключает файлы. */
require_once(ABSPATH . 'wp-settings.php');
