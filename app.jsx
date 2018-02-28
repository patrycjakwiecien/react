
    
    /* var elem = React.createElement('h1',null, 'Witaj w kursie React!') */


 //tworzymy 




//jesli CourseMedia jest przed danymi i jest objety w funkcje, ktora zwraca ten element, kazdy elelemnt moze byc danymi, moze byc przypisany do zmiennej i zwrocony z funkcji, data to atrybut, parametr tej funkcji

    
var data = {
        "id": 0,
		"title": "Kurs Programowanie w jQuery - w Praktyce",
		"description": "Poznaj jQuery, czyli najbardziej popularną bibliotekę JavaScript na Świecie! Z jQuery korzystają niemal wszystkie nowoczesne serwisy WWW, a nasz Kurs stanowi niezwykle praktyczne i wyczerpujące omówienie tej biblioteki od podstaw, aż po bardziej zaawansowane techniki. Jeśli znasz już HTML i CSS oraz przynajmniej podstawy JavaScript, jQuery to kolejna obowiązkowa pozycja na Twojej drodze do tworzenia świetnych serwisów internetowych. ",
		"image": "http://eduweb.pl/Images/Training/miniaturka-do-opisu-kursu_27ded9b2-af48-4118-a02a-e35fe950a9be.png",
		"author": "Piotr Palarz",
		"duration": "8 godzin",
		"price": 99.00,
		"rating": 4,
		"categories": ["JavaScript", "jQuery"],
		"is_new": true,
        "is_new": true,
        "is_promo": true
    }



var CourseMedia = function(data){
    return <img src = {data.image} alt="cover" />;
}

    
var NewLabel = function(data) { 
    return
    data.is_new? <span className="label label-default">Nowy!</span>: null;
}

var CoursePromoLabel = function(data) {  
return data.is_promo? <b>Kurs jest w PROMOCJI!</b>  : null;
    
}

var CourseActions = function(data) { 
    return (
   <div className="btn-group pull-right">
                <button className="btn btn-default">Szczegoly kursu</button>
                <button className="btn btn-default">Dodaj do ulubionych</button>
                <button className="btn btn-default">Dodaj do koszyka</button>
            </div> 
    )
}

var CourseDetails = function(data) { 
    
    return (
<table className="table course_details">
    <tbody>
    <tr>
        <th>Autor</th>
        <td>{data.author}</td>
    </tr>
     <tr>
        <th>Czas trwnia kursu</th>
        <td>{data.duration}</td>
    </tr>
    </tbody>
</table>
)
}



//wartosto przy takim, kodzie jak przy button powyzej umiescic nawiasy



  /*w JSX uzywamy podobnie, jak w javascript className a nie class*/
    var Course = function(data){
    return (
        <div className="media course">
        
        {/*Course media column*/}
        <div className="media-left">
        {CourseMedia(data)}
        
        </div>
        
        {/*Course content column*/}
        <div className="media-body">
           
           
            <h3>{data.title} {NewLabel(data)} </h3> 
            
          
            {/*Promotion*/}
            <p>{data.description}</p>
            
            { CoursePromoLabel(data) }
            
            
            {/*Course Actions*/} 
            {CourseActions(data)}
        </div>
    

            {/* Course Detail Column */}
<div className="media-right">
{CourseDetails(data)}
</div>
        </div>
        )
}
    
    

    
    
    

        
    ReactDOM.render(Course(data), document.getElementById('root'))
/*Renderujemy elelemnt course, bo jest var course*/


    /*<h3>{'Temat Kursu' + 'Dynamiczny'}</h3> --> w klamrach umieszczamy tresc dynamiczna, wszytsko w nich to wyrazenie javascriptowe, dwa stringi*/
    /*<h3>{data.title}</h3> --> renderujemy tresc*/
    /*<img src = {data.image} alt="cover" /> --> jesli chcemy umiescic dynamiczny atrybut/wartosc dynamiczna jako atrybut/przypisanie danych do atrybutow to wstawimy nawiasy klamrowe zamiast cudzyslowiow  */

//#11
//<b></b> - element wyboldowany

/*1.<h3>{data.title} {data.is_new? <span className="label label-default">Nowy!</span>: null}</h3>



            2. <p>{data.description}</p>
            { data.is_promo? <b>Kurs jest w PROMOCJI!</b>  : <span>Nie jest w promocji!</span> }
            
            
             elementy jsx mozna umieszczac 1.w samych elementach jsx lub 2.w elementach javascrpit
            

*/


//#12
// {/*Course media column*/} - komentarze w jsx


//#13

//<table className="table" style={ {width:'250px'} }> --> mozna nadawac styl tworzac obiekt, ktory posiada klamre oraz, ktory sam jest w klamrze