/**
 *
 */
export async function storage_quota(): null | Promise<StorageEstimate> {
  //
  const quota = await navigator.storage.estimate();
  const totalSpace = quota.quota;
  const usedSpace = quota.usage;

  return {
    quota: totalSpace,
    usage: usedSpace,
  };
}
