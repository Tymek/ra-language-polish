module.exports = {
    ra: {
        action: {
            add_filter: 'Dodaj filtr',
            add: 'Dodaj',
            back: 'Powrót',
            bulk_actions: 'Zaznaczono %{smart_count}',
            cancel: 'Przerwij',
            clear_input_value: 'Wyczyść',
            clone: 'Sklonuj',
            confirm: 'Potwierdź',
            create: 'Stwórz',
            delete: 'Usuń',
            edit: 'Edytuj',
            export: 'Eksportuj',
            list: 'Lista',
            refresh: 'Odśwież',
            remove_filter: 'Usuń ten filtr',
            remove: 'Usuń',
            save: 'Zapisz',
            search: 'Szukaj',
            show: 'Pokaż',
            sort: 'Sortuj',
            undo: 'Cofnij',
        },
        boolean: {
            true: 'Tak',
            false: 'Nie',
        },
        page: {
            create: 'Stwórz %{name}',
            dashboard: 'Panel główny',
            edit: '%{name} #%{id}',
            error: 'Coś poszło nie tak',
            list: 'Lista %{name}',
            loading: 'Ładowanie',
            not_found: 'Nie znaleziono',
            show: '%{name} #%{id}',
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
            about: 'O',
            are_you_sure: 'Czy jesteś pewien?',
            bulk_delete_content:
                'Czy jesteś pewien że chcesz usunąć %{name}? |||| Czy jesteś pewien że chcesz usunąć te %{smart_count} rekorów?',
            bulk_delete_title:
                'Usuń %{name} |||| Usuń %{smart_count} %{name} rekordy',
            delete_content: 'Czy na pewno chcesz usunąć ten rekord?',
            delete_title: 'Usuń %{name} #%{id}',
            details: 'Szczegóły',
            error: 'Wsytąpił błąd, twoje żądanie nie zostało ukończone',
            invalid_form: 'Formularz nie jest poprawny, sprawdź błędy.',
            loading: 'Strona jest ładowana, poczekaj tylko chwilę.',
            no: 'Nie',
            not_found:
                'Wpisałeś zły URL lub zostałeś niepoprawnie przeniesiony.',
            yes: 'Tak',
        },
        navigation: {
            no_results: 'Nie znaleziono wyników',
            no_more_results:
                'Numer strony %{page} znajduje się poza granicą. Spróbuj poprzednią stronę.',
            page_out_of_boundaries: 'Numer strony %{page} znajduje się poza granicą',
            page_out_from_end: 'Nie można przejść dalej niż ostatnia strona',
            page_out_from_begin: 'Nie można przejść wcześniej niż pierwsza strona',
            page_range_info: '%{offsetBegin}-%{offsetEnd} z %{total}',
            page_rows_per_page: 'Wiersze na stronę:',
            next: 'Następna',
            prev: 'Poprzednia',
        },
        auth: {
            user_menu: 'Profil',
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
            data_provider_error:
                'Błąd przy pobieraniu danych. Sprawdź konsolę.',
            canceled: 'Akcja anulowana',
            logged_out: 'Twoja sesja wygasła, zaloguj się ponownie.',
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
