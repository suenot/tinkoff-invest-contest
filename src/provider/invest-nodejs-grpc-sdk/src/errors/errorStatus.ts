export const errorStatusDescribe = new Map<string, string>([
  ['30001', 'Входной параметр from является обязательным. Укажите корректный параметр from.'],
  ['30002', 'Запрошенный период не может превышать 7 дней. Укажите корректный период.'],
  ['30003', 'Входной параметр from не может быть меньше текущей даты. Укажите корректный параметр from.'],
  ['30004', 'Входной параметр to является обязательным. Укажите корректный параметр to.'],
  [
    '30005',
    'Входной параметр id_type имеет некорректное значение. Список доступных значений: id_type.(https://tinkoff.github.io/investAPI/instruments#instrumentidtype)',
  ],
  ['30006', 'Входной параметр id_type является обязательным. Укажите корректный параметр id_type.'],
  ['30007', 'Входной параметр id является обязательным. Укажите корректный параметр id.'],
  ['30008', 'Входной параметр figi является обязательным. Укажите корректный параметр figi.'],
  ['30009', 'Входной параметр from имеет некорректное значение. Укажите корректный параметр from.'],
  ['30010', 'Входной параметр to имеет некорректное значение. Укажите корректный параметр to.'],
  [
    '30011',
    'Входной параметр interval имеет некорректное значение. Список доступных значений: interval.(https://tinkoff.github.io/investAPI/marketdata#subscriptioninterval)',
  ],
  ['30012', 'Входной параметр to не может быть меньше параметра from. Укажите корректные параметры from и to.'],
  [
    '30013',
    'Входной параметр class_code не может быть пустым при поиске по тикеру. Укажите корректный параметр class_code. Подробнее: Идентификация инструментов.(https://tinkoff.github.io/investAPI/faq_identification/)',
  ],
  ['30014', 'Превышен максимальный период запроса для данного интервала свечи. Укажите корректный интервал.'],
  ['30015', 'Входной параметр quantity является обязательным. Укажите корректный параметр quantity.'],
  ['30016', 'Входной параметр quantity имеет некорректное значение. Укажите корректный параметр quantity.'],
  ['30017', 'Входной параметр price является обязательным. Укажите корректный параметр price.'],
  ['30018', 'Входной параметр price имеет некорректное значение. Укажите корректный параметр price.'],
  ['30019', 'Входной параметр direction является обязательным. Укажите корректный параметр direction.'],
  [
    '30020',
    'Входной параметр direction имеет некорректное значение. Список доступных значений: direction.(https://tinkoff.github.io/investAPI/stoporders/#stoporderdirection)',
  ],
  ['30021', 'Входной параметр account_id является обязательным. Укажите корректный параметр account_id.'],
  ['30025', 'Входной параметр order_type является обязательным. Укажите корректный параметр order_type.'],
  ['30027', 'Входной параметр order_id является обязательным. Укажите корректный параметр order_id.'],
  ['30031', 'Входной параметр depth является обязательным. Укажите корректный параметр depth.'],
  ['30032', 'Входной параметр depth имеет некорректное значение. Укажите корректный параметр depth.'],
  ['30033', 'Параметр trade_clearing_account или class_code не может быть пустым.'],
  ['30034', 'Недостаточно средств для совершения сделки (ошибка песочницы). Пополните баланс нужной валюты.'],
  ['30036', 'Входной параметр stop_price является обязательным. Укажите корректный параметр stop_price.'],
  ['30037', 'Входной параметр stop_order_type является обязательным. Укажите корректный параметр stop_order_type.'],
  [
    '30038',
    'Входной параметр stop_order_type имеет некорректное значение. Список доступных значений: stop_order_type.(https://tinkoff.github.io/investAPI/stoporders/#stopordertype)',
  ],
  ['30040', 'Входной параметр expire_date имеет некорректное значение. Укажите корректный параметр expire_date.'],
  [
    '30041',
    'Метод предназначен только для работы с фьючерсами. Передайте во входные параметры метода идентификатор фьючерса.',
  ],
  ['30042', 'Недостаточно активов для маржинальной сделки. Проверьте маржинальные показатели счёта.'],
  ['30043', 'Входной параметр expiration_type является обязательным. Укажите корректный параметр expiration_type.'],
  [
    '30044',
    'Входной параметр expiration_type имеет некорректное значение. Список доступных значений: expiration_type.(https://tinkoff.github.io/investAPI/stoporders/#stoporderexpirationtype)',
  ],
  ['30045', 'Входной параметр ticker является обязательным. Укажите корректный параметр ticker.'],
  ['30047', 'Валюта цены не совпадает с валютой расчётов по инструменту. Укажите корректную валюту цены.'],
  [
    '30048',
    'Метод предназначен только для запроса информации по облигации. Передайте во входные параметры метода идентификатор облигации.',
  ],
  ['30049', 'Ошибка метода выставления торгового поручения. Подробнее в тексте ошибки.'],
  [
    '30050',
    'Входной параметр instrument_status имеет некорректное значение. Список доступных значений: instrument_status.(https://tinkoff.github.io/investAPI/instruments#instrumentstatus)',
  ],
  ['30051', 'Для данного договора недоступна маржинальная торговля.'],
  ['30052', 'Для данного инструмента недоступна торговля через API.'],
  ['30053', 'Ошибка метода выставления стоп-заявки. Подробнее в тексте ошибки.'],
  ['30054', 'Тип инструмента не инвестиционный фонд или акция'],
  ['30055', 'order_id не может быть длиннее 36 символов'],
  ['30056', 'Валюта выставления стоп-заявки не поддерживается'],
  ['30057', 'Заявка является дублем, но отчет по заявке не найден'],
  ['30058', 'Выполнение задачи еще не завершено, попробуйте позже.'],
  ['30059', 'Ошибка метода отмены заявки. Подробнее в тексте ошибки.'],
  ['30060', 'Ошибка метода отмены стоп-заявки. Подробнее в тексте ошибки.'],
  [
    '30061',
    'Входной параметр from имеет некорректное значение. Укажите значение в пределах от 1970-01-01T00:00:00Z до 2099-12-31T23:59:59.999999999Z включительно.',
  ],
  [
    '30062',
    'Входной параметр to имеет некорректное значение. Укажите значение в пределах от 1970-01-01T00:00:00Z до 2099-12-31T23:59:59.999999999Z включительно.',
  ],
  [
    '30063',
    'Входной параметр expire_date имеет некорректное значение. Дата должна быть не ранее текущей и не позднее 2099-12-31T23:59:59.999999999Z.',
  ],
  ['30064', 'Запрошенный период не может превышать 31 дня. Укажите корректный период.'],
  ['30065', 'Входной параметр task_id является обязательным. Укажите корректный параметр task_id.'],
  ['30066', 'Входной параметр payload является обязательным. Укажите корректный параметр payload.'],
  ['30077', 'Метод недоступен для внебиржевых инструментов.'],
  ['30078', 'Некорректный шаг изменения цены.'],
  ['30079', 'Инструмент недоступен для торгов.'],
  ['30080', 'Количество лотов должно быть положительным числом.'],
  ['30081', 'Аккаунт закрыт.'],
  ['30082', 'Аккаунт заблокирован.'],
  ['30083', 'Некорректный тип заявки.'],
  ['30084', 'Превышен лимит запрашиваемого периода.'],
  [
    '40002',
    'Недостаточно прав для совершения операции. Токен доступа имеет уровень прав read-only. Подробнее: Виды токенов(https://tinkoff.github.io/investAPI/index#_2)',
  ],
  ['50001', 'Биржа не найдена по переданному exchange_id. Укажите корректный exchange_id.'],
  ['50002', 'Инструмент не найден. Укажите корректный идентификатор инструмента.'],
  ['50004', 'Счёт не найден по переданному account_id. Укажите корректный account_id.'],
  ['50005', 'Торговое поручение не найдено по переданному order_id. Укажите корректный order_id.'],
  ['50006', 'Стоп-заявка не найдена по переданному stop_order_id. Укажите корректный stop_order_id.'],
  ['50007', 'Задача не найдена.'],
  ['50008', 'Отсутствует источник данных по стаканам.'],
  ['50009', 'Актив не найден. Укажите корректный идентификатор актива.'],
  ['70001', 'Внутренняя ошибка сервиса. Если ошибка повторяется, обратитесь в службу технической поддержки.'],
  [
    '70002',
    'Неизвестная сетевая ошибка, попробуйте выполнить запрос позднее. Если ошибка повторяется, обратитесь в службу технической поддержки.',
  ],
  [
    '70003',
    'Внутренняя ошибка сервиса, попробуйте выполнить запрос позднее. Если ошибка повторяется, обратитесь в службу технической поддержки.',
  ],
  [
    '80001',
    'Превышен лимит одновременных открытых stream-соединений. Подробнее: Лимитная политика(https://tinkoff.github.io/investAPI/limits/)',
  ],
  [
    '80002',
    'Превышен лимит запросов в минуту. Подробнее: Лимитная политика(https://tinkoff.github.io/investAPI/limits/)',
  ],
  ['90001', 'Требуется подтверждение операции. Подробнее в тексте ошибки.'],
]);
