'use client';
import React from 'react';
import { Skeleton, SkeletonText } from '@chakra-ui/react';

const loading = () => (
  <div className="lg:px-12 md:px-6 px-4 py-6">
    <Skeleton height="200px" mb="4" />
    <SkeletonText noOfLines={3} spacing="4" />
    <Skeleton height="50px" mt="4" />
    <SkeletonText noOfLines={2} spacing="4" />
  </div>
);

export default loading;
