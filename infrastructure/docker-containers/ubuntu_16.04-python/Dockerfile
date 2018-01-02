FROM ubuntu:16.04

ENV BUILD_TIMESTAMP 20170322

EXPOSE 80 443

CMD /bin/bash

RUN apt-get update
RUN apt-get upgrade
#RUN apt-get install git
RUN \
  apt-get update && \
  apt-get install -y python python-dev python-pip python-virtualenv
#RUN apt-get install virtualenv virtualenvwrapper
#
##RUN mkvirtualenv bedjangoStarter
##RUN workon bedjangoStarter
#
## install pip depends
#RUN pip3 install --upgrade pip setuptools wheel ipdb gunicorn
#ADD assets /assets
#RUN pip3 install -r /assets/requirements.txt
#RUN pip3 install -r /assets/requirements-dev.txt
#
#RUN django-admin.py startproject --template=https://github.com/BeDjango/bedjango-starter/archive/master.zip --extension=py,rst,yml bedjangoStarter
#
##
##RUN python3 manage.py migrate
##RUN python3 manage.py compilemessages