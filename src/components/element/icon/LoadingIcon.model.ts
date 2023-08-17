export namespace LoadingIcon {
  export type Status = 'waiting' | 'loading' | 'succeeded' | 'failed'
  export type Props = {
    status: Status
  }
}
