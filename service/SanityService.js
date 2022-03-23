import sanityClient from '@sanity/client';

export default class SanityService {
 
        _client = sanityClient({
        dataset : 'production',
        projectId : 'fw2nw9sx', //sanity 프로젝트 안에 나와있음
        useCdn : process.env.NODE_ENV === 'production',
    });

    async getHome() {
        return await this._client.fetch(`*[_type == 'home'][0]{'mainPostUrl' : mainPost -> slug.current}`)

    }

    async getPost() {
        return await this._client.fetch(`
        *[_type == 'post']{
          title,
          subtitle,
          createdAt,
          'content' : content[]{
            ..., 
            ...select(_type == 'imageGallery' => {'images' : images[]{..., 'url' : asset -> url }} )
           },
           'slug' : slug.current,
           'thumbnail' : {
             'alt' : thumbnail.alt,
             'imageUrl' : thumbnail.asset -> url
           },
           'author' : author  -> {
             name,
             role,
             'image' : image.asset -> url
           },
           'tag' : tag -> {
             title,
             'sulg' : slug.current
           }
           }
            `);
    }
}