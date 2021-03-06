# Generated by Django 2.2.17 on 2021-01-09 15:07

from django.db import migrations, models
import django.utils.timezone
import utils.file
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('photobooks', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Gallery',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('uuid', models.UUIDField(default=uuid.uuid4, editable=False, unique=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('image', models.ImageField(upload_to=utils.file.generate_photobook_file_name)),
            ],
            options={
                'verbose_name': 'Gallery',
                'verbose_name_plural': 'Gallery',
            },
        ),
        migrations.RemoveField(
            model_name='photobook',
            name='image',
        ),
        migrations.AddField(
            model_name='photobook',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='photobook',
            name='updated_at',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AddField(
            model_name='photobook',
            name='uuid',
            field=models.UUIDField(default=uuid.uuid4, editable=False, unique=True),
        ),
        migrations.AddField(
            model_name='photobook',
            name='images',
            field=models.ManyToManyField(related_name='photobook_images', to='photobooks.Gallery'),
        ),
    ]
