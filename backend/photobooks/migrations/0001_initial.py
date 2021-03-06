# Generated by Django 2.2.17 on 2021-01-09 13:57

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import utils.file


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='PhotoBook',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to=utils.file.generate_photobook_file_name)),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='user_photobook', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'PhotoBook',
                'verbose_name_plural': 'PhotoBooks',
            },
        ),
    ]
