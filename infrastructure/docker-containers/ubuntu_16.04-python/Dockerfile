FROM ubuntu:16.04

ENV BUILD_TIMESTAMP 20170328
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
        virtualenv \
        virtualenvwrapper \
        gettext && \
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

RUN django-admin.py startproject --template=https://github.com/BeDjango/bedjango-starter/archive/master.zip --extension=py,rst,yml bedjangoStarter

WORKDIR /bedjangoStarter/bedjangoStarter
RUN python3 manage.py migrate
RUN python3 manage.py makemigrations
RUN python3 manage.py collectstatic
RUN python3 manage.py compilemessages

CMD [ "python3", "./manage.py", "runserver", "0.0.0.0:8000" ]