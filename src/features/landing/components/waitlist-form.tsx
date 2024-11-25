'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@shared/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@shared/components/ui/form'
import { Input } from '@shared/components/ui/input'
import { useMutation } from '@tanstack/react-query'
import { showSonner } from '@shared/components/ui/sonner'
import { SuccessWaitlistModal } from './success-waitlist-modal'
import * as waitlistService from '../waitlist-service'

const formSchema = z.object({
  fullName: z.string().min(2, 'Please enter your name').max(50),
  email: z.string().min(2, 'Please enter your email').email({
    message: 'Please enter a valid email address.',
  }),
})

export function WaitListForm(): React.ReactElement {
  const [isSuccessModalOpen, setIsSuccessModalOpen] =
    React.useState<boolean>(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
    },
  })

  const createWaitingList = useMutation({
    mutationFn: waitlistService.joinWaitingList,
    onSuccess: () => {
      setIsSuccessModalOpen(true)
      form.reset()
    },
    onError: () => {
      showSonner({
        title: "Opps, you're unlucky",
        description: 'Something error when tried to make you become our family',
      })
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { email, fullName } = values
    createWaitingList.mutate({ input: { email, fullName } })
  }

  return (
    <div className="flex w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col w-full space-y-3"
        >
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Your awesome name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Your email address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex w-full">
            <Button type="submit" className="mt-3 w-full">
              Join waitlist
              {createWaitingList.isPending ? (
                <i className="fi fi fi-rr-spinner animate-spin absolute right-4" />
              ) : (
                <i className="fi fi-rr-arrow-right absolute right-4" />
              )}
            </Button>
          </div>
        </form>
      </Form>

      <SuccessWaitlistModal
        isOpen={isSuccessModalOpen}
        onOpenChange={setIsSuccessModalOpen}
      />
    </div>
  )
}
