# Mechaniki

Projekt w obecnym stanie przedstawia wg mnie rozsądny kompromis między przedstawieniem swoich umiejętności a czasem poświęconym na zadanie. Na pewno tworząc duży serwis nawet w takim zadaniu można by spędzić dziesiątki godzin przygotowując i ulepszając uniwersalne podstawy dla przyszłych funkcjonalności.

# Stylowanie

Lubię podejście vue i jednoplikowe komponenty. Dzięki scoped styles możliwe jest używanie prostych klas w przeciwieństwie do klasycznego BEMa (.main-page__user__options__button__solid__primary--atctive::hover). Jednak w ostatnim projekcie zdecydowaliśmy się na podejście funkcyjne i framework Tailwind. Jest to obecnie moje ulubione podejście, lecz nie chciałem go przestawiać w tym projekcie.

Przyłożyłem natomiast moje starania by efekt wizualny jak najdokładniej oddawał projekt graficzny. 

# Testy

Ze względów głównie czasowych nie rozwinąłem w tym zadaniu testów tak by uzyskać znaczny coverage. Użyłem tylko kilku najczęściej używanych. W poprzednim projekcie napisałem ponad 400 testów jednostkowych do istniejącego już przojektu, gdzie testy wcześniej nie istniały. W folderze z testami umieściłem pliki które zrobiłem by ułatwić pracę z testami i uniknąć powtarzania  tworzenia skomplikowanego wrappera za każdym razem. 

# Komponenty

Nie do końca zrozumiałem logikę paginacji w projekcie. Tak czy inaczej ze względu na to, że niekorzsytałem z żadnych gotowych rozwiązań, użyłem komponentu który napisałem dla innego mojego projektu gdzie mechanika jest minimalnie inna, lecz w 100% funkcjonalna i zgodna z duchem projektu.
