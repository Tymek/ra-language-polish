module.exports = {
    ra: {
        action: {
            delete: 'Usuń',
            show: 'Pokaż',
            list: 'Lista',
            save: 'Zapisz',
            create: 'Stwórz',
            edit: 'Edytuj',
            sort: 'Sortuj',
            cancel: 'Przerwij',
            undo: 'Cofnij',
            refresh: 'Odśwież',
            add: 'Dodaj',
            remove: 'Usuń',
            add_filter: 'Dodaj filtr',
            remove_filter: 'Usuń ten filtr',
            back: 'Powrót',
            bulk_actions: 'Zaznaczono %{smart_count}',
        },
        boolean: {
            true: 'Tak',
            false: 'Nie',
        },
        page: {
            list: 'Lista %{name}',
            edit: '%{name} #%{id}',
            show: '%{name} #%{id}',
            create: 'Stwórz %{name}',
            dashboard: 'Panel główny',
            not_found: 'Nie znaleziono',
            loading: 'Ładowanie',
        },
        input: {
            file: {
                upload_several:
                    'Upuść tutaj pliki aby je wysłać lub kliknij tutaj i wybierz.',
                upload_single: 'Upuść tutaj plik aby go wysłać lub kliknij i wybierz.',
            },
            image: {
                upload_several:
                    'Upuść tutaj obrazy aby je wysłać lub kliknij tutaj i wybierz.',
                upload_single:
                    'Upuść tutaj obraz aby go wysłać lub kliknij tutaj i wybierz.',
            },
            references: {
                all_missing: 'Nie znaleziono pasujących odnośników.',
                many_missing:
                    'Minimum jeden z pasujących odnośników nie jest dostępny.',
                single_missing:
                    'Powiązany odnośnik nie jest już dostępny.',
            },
        },
        message: {
            yes: 'Tak',
            no: 'Nie',
            are_you_sure: 'Czy jesteś pewien?',
            about: 'O',
            not_found:
                'Wpisałeś zły URL lub zostałeś niepoprawnie przeniesiony.',
            loading: 'Strona jest ładowana, poczekaj tylko chwilę.',
            invalid_form: 'Formularz nie jest poprawny, sprawdź błędy.',
            delete_title: 'Usuń %{name} #%{id}',
            delete_content: 'Czy na pewno chcesz usunąć ten rekord?',
            bulk_delete_title:
                'Usuń %{name} |||| Usuń %{smart_count} %{name} rekordy',
            bulk_delete_content:
                'Czy jesteś pewien że chcesz usunąć %{name}? |||| Czy jesteś pewien że chcesz usunąć te %{smart_count} rekorów?',
        },
        navigation: {
            no_results: 'Nie znaleziono wyników',
            no_more_results:
                'Numer strony %{page} znajduje się poza granicą. Spróbuj poprzednią stronę.',
            page_out_of_boundaries: 'Numer strony %{page} znajduje się poza granicą',
            page_out_from_end: 'Nie można przejść dalej niż ostatnia strona',
            page_out_from_begin: 'Nie można przejść wcześniej niż pierwsza strona',
            page_range_info: '%{offsetBegin}-%{offsetEnd} z %{total}',
            next: 'Następna',
            prev: 'Poprzednia',
        },
        auth: {
            username: 'Nazwa użytkownika',
            password: 'Hasło',
            sign_in: 'Zaloguj',
            sign_in_error: 'Logowanie się nie powiodło, spróbuj ponownie',
            logout: 'Wyloguj',
        },
        notification: {
            updated: 'Element zaktualizowany |||| Zaktualizowano %{smart_count} elementów',
            created: 'Element stworzony',
            deleted: 'Element usunięty |||| Usunięto %{smart_count} elementów',
            bad_item: 'Niepoprawny element',
            item_doesnt_exist: 'Element nie istnieje',
            http_error: 'Problem z połączeniem serwera',
            canceled: 'Akcja anulowana',
        },
        validation: {
            required: 'Wymagany',
            minLength: 'Musi być minimum %{min} znaków',
            maxLength: 'Musi być maksimum %{max} znaków',
            minValue: 'Musi być minimum %{min}',
            maxValue: 'Musi być maksimum %{max}',
            number: 'Musi być liczbą',
            email: 'Musi być poprawnym adresem email',
            oneOf: 'Musi być jednym z: %{options}',
            regex: 'Musi pasować do konkretnego formatu (regexp): %{pattern}',
        },
    },
};
