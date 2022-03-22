import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PostsModule } from './components/posts/posts.module';
import { EnvModule } from './config/environments/env.module';
import { Env } from '@env-config/environments/env.service';
@Module({
  imports: [
    EnvModule,
    GraphQLModule.forRootAsync({
      inject: [Env],
      useFactory: (env: Env) => env.GqlModuleOptionsFactory,
    }),

    PostsModule,
  ],
})
export class AppModule {}
