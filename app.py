from flask import (Flask, render_template, redirect, url_for)

import sqlite3 as sql  # import sqlite module
# create a connection object

try:
    with sql.connect('filmflix.db', check_same_thread=False) as conn:
        # check_same_thread = false, consequences?
        cursor = conn.cursor()
except sql.OperationalError as e:
    print(f'Connection failed: {e}')

app = Flask(__name__)

# def get_movies():
#    cursor.execute("SELECT * FROM tblFilms")
#    movies = cursor.fetchall()
#    return movies


@app.route("/")
def home():
    return render_template("home.html")


@app.route("/all_movies")
def all_movies():
    cursor.execute("SELECT * FROM tblFilms")
    movies = cursor.fetchall()
    return render_template('all_movies.html', movies=movies)


@app.route("/by_genre")
def by_genre():
    genresList = []
    cursor.execute('Select genre from tblFilms')
    genres = cursor.fetchall()
    for g in genres:
        g = g[0]
        if g not in genresList:
            genresList.append(g)
    cursor.execute("SELECT * FROM tblFilms")
    movies = cursor.fetchall()
    return render_template('by_genre.html',
                           genresList=genresList,
                           movies=movies)


@app.route("/by_year")
def by_year():
    cursor.execute("SELECT * FROM tblFilms")
    movies = cursor.fetchall()
    return render_template("by_year.html", movies=movies)


@app.route("/by_rating")
def by_rating():
    ratingList = []
    cursor.execute('Select rating from tblFilms')
    ratings = cursor.fetchall()
    for r in ratings:
        r = r[0]
        if r not in ratingList:
            ratingList.append(r)
    cursor.execute("SELECT * FROM tblFilms")
    movies = cursor.fetchall()
    return render_template('by_rating.html',
                           ratingList=ratingList,
                           movies=movies)


@app.route("/movie/<movie_id>", methods=['GET', 'POST'])
def single_movie(movie_id):
    cursor.execute(f'SELECT * FROM tblFilms WHERE filmID={movie_id}')
    movie = cursor.fetchone()
    return render_template('single_movie.html', movie=movie)