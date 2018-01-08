FROM ubuntu:16.04

ENV BUILD_TIMESTAMP 20181015_f12
ENV APP_HOME /bedjangoStarter/bedjangoStarter
ENV APP_NAME bedjangoStarter

CMD /bin/bash

RUN \
    apt-get update && \
    apt-get install -yqq \
        git && \
    apt-get clean

RUN \
    apt-get -yqq install \
        python3 \
        python3-dev \
        python3-pip \
        libapache2-mod-wsgi-py3 \
        virtualenv \
        virtualenvwrapper \
        gettext \
        apache2 \
        apache2-utils && \
    apt-get clean \

#RUN mkvirtualenv bedjangoStarter
#RUN workon bedjangoStarter

## install pip depends
RUN pip3 install --upgrade \
    pip \
    setuptools \
    wheel \
    ipdb \
    gunicorn

ADD assets /assets
RUN pip3 install -r assets/requirements.txt
RUN pip3 install -r assets/requirements-dev.txt

WORKDIR /var/www/html/

RUN django-admin.py startproject --template=https://github.com/BeDjango/bedjango-starter/archive/master.zip --extension=py,rst,yml bedjangoStarter

WORKDIR /var/www/html/bedjangoStarter/bedjangoStarter
RUN python3 manage.py migrate
RUN python3 manage.py makemigrations
RUN python3 manage.py collectstatic
RUN python3 manage.py compilemessages

ADD ./demo_site.conf /etc/apache2/sites-available/000-default.conf
CMD ["apache2ctl", "-D", "FOREGROUND"]
#CMD [ "python3", "./manage.py", "runserver", "0.0.0.0:8000" ]