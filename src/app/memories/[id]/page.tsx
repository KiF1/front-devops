
import dayjs from "dayjs";
import { cookies } from "next/headers";
import ptBr from 'dayjs/locale/pt-br';
import Image from "next/image";
import api from '../../../lib/api';
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface Params {
  params: {
    id: string
  }
}

interface Memory {
  id: string
  coverUrl: string
  content: string
  createdAt: string
}

dayjs.locale(ptBr)

export default async function Memory({ params: { id }}: Params){
  const token = cookies().get('token')?.value;

  const response = await api.get(`/memories/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  const memory: Memory = response.data;

  return(
    <div className="space-y-4 p-8">
      <Link
        href="/"
        className="flex items-center gap-2 text-sm text-gray-200 hover:text-gray-100"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar
      </Link>
      <time className="flex items-center gap-2 text-lg text-gray-100 before:h-px before:w-5 before:bg-gray-50">{dayjs(memory.createdAt).format('D[ de ]MMMM[, ]YYYY')}</time>
      <Image src={memory.coverUrl} width={592} height={280} className="w-full aspect-video object-cover rounded-lg" alt="" />
      <p className="text-lg leading-relaxed text-gray-100">{memory.content}</p>
    </div>
  )
}